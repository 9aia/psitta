---
description: A high-level summary of the project.
---

# Project Overview

## Description

Psitta is a next-generation internationalization (i18n) framework built for modern web development. Designed to be type-safe, AI-powered, and based on the ECMAScript Internationalization API (Intl), Psitta simplifies the process of localizing messages, URLs, and values. By leveraging advanced AI technologies, it offers seamless machine translation and locale detection while maintaining compatibility with any JavaScript framework. Psitta prioritizes developer-first principles, enabling effortless integration and intuitive workflows for internationalization tasks.

## Goals

- **Developer-First Design**: Simplify the i18n process for developers with a user-friendly API and clear workflows.
- **Type Safety**: Leverage TypeScript to ensure accurate and reliable internationalization.
- **AI-Powered Translation**: Enable high-quality, automated translations using advanced AI models.
- **Modern Standards**: Focus on ESM-only compatibility and utilize Intl Web APIs for robust formatting.
- **Framework Agnostic**: Provide universal support for any JavaScript framework or library.

## Scope

Psitta provides comprehensive support for:

- **Formatting**: Numbers, dates, and texts using Intl APIs.
- **Localization**: URLs, display names and messages.
- **Interpolation**: Replacing placeholders in strings (e.g., {name}) with values from a context object, allowing dynamic text creation.
- **Grammar**: Applying grammatical nuances, such as number or gender inflections.
- **Resolve**: Dynamically processing placeholders in message templates with contextual values, with support for formatting, inflection, and locale-specific adjustments.
- **Detection**: Locale identification from various sources, such as path or headers.
- **Translation**: AI-powered, high-quality machine translation.

**The project does not include:**

- Administrative tools for managing or editing translations directly within the framework.

## Requirements

To use Psitta, developers need:

- A modern JavaScript environment with ESM support.
- A compatible JavaScript framework or library (optional).
- Basic knowledge of TypeScript for maximum benefits.
