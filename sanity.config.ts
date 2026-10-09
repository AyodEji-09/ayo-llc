'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import {apiVersion, dataset, projectId} from './sanity/env'

export default defineConfig({
  name: 'ayo-llc',
  title: 'AYO LLC Blog',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
  schema: {
    types: schemaTypes,
  },
})
