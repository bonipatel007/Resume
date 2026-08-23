import * as Icons from 'lucide-react'

/**
 * Resolve a lucide-react icon component from its string name.
 * Data files store icon names as plain strings so content stays
 * decoupled from the UI layer; this is the single place that
 * turns a name back into a renderable component.
 */
export function getIcon(name) {
  return Icons[name] || Icons.Circle
}
