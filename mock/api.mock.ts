import { defineMock } from 'vite-plugin-mock-dev-server'
import { test } from './test'
export default defineMock([...test])
