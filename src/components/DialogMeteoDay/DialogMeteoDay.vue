<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="60%">
            <template v-slot:activator="{ on, attrs }">
                <MeteoCardDay :meteoDay="meteoDay" :on="on" :attrs="attrs" />
            </template>

            <v-card class="">
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

                <MeteoCardDialog v-for="hour in meteoDay.data" :meteoNow="hour" :key="hour.time"/>

            </v-card>
        </v-dialog>
    </div>
</template>

<script >
import MeteoCardDay from '../MeteoCard/MeteoCardDay.vue';
import MeteoCardDialog from '../MeteoCard/MeteoCardDialog.vue';


export default {
    data() {
        return {
            dialog: false,
        }
    },
    props: {
        meteoDay: []

    },
    components: {
        MeteoCardDay,
        MeteoCardDialog

    }
}
</script>