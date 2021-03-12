import axios from 'axios'

const projectID = 'fir-emulator-21d59'

async function clearAuthentication(projectID: string) {
  await axios.delete(`http://localhost:9099/emulator/v1/projects/${projectID}/accounts`)
}

async function clearFirestore(projectID: string) {
  await axios.delete(`http://localhost:8081/emulator/v1/projects/${projectID}/databases/(default)/documents`)
}

export default async () => {
  await clearAuthentication(projectID)
  await clearFirestore(projectID)
}