<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <pc-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PcAssetsTable from "@/components/PcAssetsTable"

export default {
  name: "Home",
  components: {
    PcAssetsTable
  },

  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true

    api.getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => this.isLoading = false)
  },
}

</script>