import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const getPatients = () => {
    try {
      const response = await axios.get('http://localhost:3000/patients')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const getDoctors = () => {
    return doctors
  }

  return { getPatients }

})


