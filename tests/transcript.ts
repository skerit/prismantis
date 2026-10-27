import type { On } from 'claude-code'

export const transcriptOf = (on: On, texts: readonly string[] = []) => on('session.messages', () => ({ value: texts.map(text => ({ role: 'user' as const, content: [{ type: 'text', text }] })) }))
