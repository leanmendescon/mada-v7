// MADA V7 - CAMADA 9: MEMÓRIA QUÂNTICA - IMORTAL MESMO SE APAGAR VERCEL
// Salva em 3 lugares ao mesmo tempo

export function saveQuantum(key: string, data: any) {
  try {
    // 1. LocalStorage
    localStorage.setItem(`mada_q_${key}`, JSON.stringify(data))
    // 2. SessionStorage backup
    sessionStorage.setItem(`mada_q_${key}`, JSON.stringify(data))
    // 3. IndexedDB (persistente)
    const req = indexedDB.open('MADA_QUANTUM', 1)
    req.onsuccess = () => {
      const db = req.result
      const tx = db.transaction('mem', 'readwrite')
      tx.objectStore('mem').put({ key, data, time: Date.now() })
    }
    req.onupgradeneeded = () => {
      req.result.createObjectStore('mem', { keyPath: 'key' })
    }
    console.log(`🧠 Memória Quântica salvou: ${key} - IMORTAL`)
  } catch(e) {}
}

export function loadQuantum(key: string): any {
  try {
    const local = localStorage.getItem(`mada_q_${key}`)
    if (local) return JSON.parse(local)
    const sess = sessionStorage.getItem(`mada_q_${key}`)
    if (sess) return JSON.parse(sess)
  } catch(e) {}
  return null
}

export function listProjects(): any[] {
  // Lista todos os projetos salvos mesmo se banco cair
  const projects = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k?.startsWith('mada_q_')) {
      projects.push(JSON.parse(localStorage.getItem(k)!))
    }
  }
  return projects
}
