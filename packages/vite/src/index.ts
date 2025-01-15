import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import { createLogger } from 'vite'
import process from 'node:process'
import fg from 'fast-glob'

type Options = {
  include?: string | string[]
  exclude?: string | string[]
  outputFile?: string
  debug?: boolean
}

const name = 'vite-plugin-psitta'
const logger = createLogger('info', { prefix: `[${name}]` })

export default function psittaPlugin(options: Options = {}): Plugin {
  const {
    outputFile = './.psitta/changedFiles.json',
    include = ['**/*.ts', '**/*.mts', '**/*.js', '**/*.mjs', '**/*.jsx', '**/*.tsx', '**/*.vue'],
    exclude = ['**/*.d.ts', '**/*.d.mts', '**/*.test.*', '**/*.spec.*'],
  } = options
  const changedFiles = new Set<string>()

  return {
    name,
    apply: 'serve', // Only run in dev mode
    handleHotUpdate({ file }) {
      if (file === path.resolve(outputFile))
        return

      const relativeFile = path.relative(process.cwd(), file)
      const isIncluded = fg.sync(include, {
        ignore: typeof exclude === 'string' ? [exclude] : exclude,
      })
        .includes(relativeFile)

      if (!isIncluded) {
        if (options.debug)
          logger.info(`file IGNORED: ${relativeFile}`, { timestamp: true })

        return
      }

      if (options.debug)
        logger.info(`file included: ${relativeFile}`, { timestamp: true })

      changedFiles.add(file)

      updateFile(outputFile, changedFiles)
    },
    closeBundle() {
      // Final write when the dev server shuts down
      updateFile(outputFile, changedFiles)
    },
  }
}

function updateFile(outputFile: string, changedFiles: Set<string>) {
  const outputDir = path.dirname(outputFile)

  if (!fs.existsSync(outputDir))
    fs.mkdirSync(outputDir, { recursive: true })

  fs.writeFileSync(
    path.resolve(outputFile),
    JSON.stringify([...changedFiles], null, 2),
  )
}
