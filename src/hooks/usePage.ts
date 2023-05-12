import { ref } from 'vue'

const activeName = ref();
const list = ref([])
const loaded = ref(false)

export const usePage = () => {
    return {
        activeName,
        list,
        loaded
    }
}
