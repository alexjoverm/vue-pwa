import idbKeyval from 'idb-keyval'

export const save = (id, messages) => idbKeyval.set(id, messages)

export const get = id => idbKeyval.get(id)
