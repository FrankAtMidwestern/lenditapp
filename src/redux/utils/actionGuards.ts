export function isOfflineAction(
  action: unknown,
): action is {meta: {offline: boolean}} {
  return (
    typeof action === 'object' &&
    action !== null &&
    'meta' in action &&
    typeof (action as any).meta === 'object' &&
    (action as any).meta !== null &&
    'offline' in (action as any).meta &&
    typeof (action as any).meta.offline === 'boolean'
  );
}
