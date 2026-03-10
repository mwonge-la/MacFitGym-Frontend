<script setup>

</script>

<template>
  <v-container style="background-color:#CFD0D6">
    <v-row>
        <div class="text-display-medium mb-12">Bundles and Pricing</div>
    </v-row>

    <v-row>
        <v-col md-3>
            <v-card class="text-center">
                <v-icon color="#A6AD1E" icon="mdi-calendar-week" size="large"></v-icon>
                <v-card-tittle color="#A6AD1E">Daily Pass</v-card-tittle>
                <v-card-text>500 Ksh</v-card-text>
            </v-card>
        </v-col>
        <v-col md-3>
            <v-card class="text-center">
                <v-icon color="#A6AD1E" icon="mdi-numeric-1-box-multiple-outline" size="large"></v-icon>
                <v-card-tittle color="#A6AD1E">1 Month</v-card-tittle>
                <v-card-text>1500 Ksh</v-card-text>
            </v-card>
        </v-col>
        <v-col md-3>
            <v-card class="text-center">
                <v-icon color="#A6AD1E" icon="mdi-numeric-2-box-multiple-outline" size="large"></v-icon>
                <v-card-tittle color="#A6AD1E">2 Months</v-card-tittle>
                <v-card-text>2500 Ksh</v-card-text>
            </v-card>
        </v-col>
        <v-col md-3>
            <v-card class="text-center">
                <v-icon color="#A6AD1E" icon="mdi-numeric-3-box-multiple-outline" size="large"></v-icon>
                <v-card-tittle color="#A6AD1E">3 Months</v-card-tittle>
                <v-card-text>3500 Ksh</v-card-text>
            </v-card>
        </v-col>
    </v-row>
  <v-row>
    <v-col md="12">
        <v-card class="text-center">
                <v-icon color="#A6AD1E" icon="mdi-numeric-3-box-multiple-outline" size="large"></v-icon>
                <v-card-tittle color="#A6AD1E">12 Months</v-card-tittle>
                <v-card-text>35,000 Ksh</v-card-text>
            </v-card>
    </v-col>
  </v-row>

  </v-container>
  <!-- What's included -->
<v-container style="background-color:#CFD0D6" class="mt-12">
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12">What's included in your bundle</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-dumbbell" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Gym Services</v-card-title>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-gymnastics" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Coaching & Training Services</v-card-title>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-account-group" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Group Classes</v-card-title>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-nutrition" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Health & Wellness Services</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-pot-steam-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Premium Amenities</v-card-title>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-digital-ocean" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Digital / App Services</v-card-title>
                </v-card>
            </v-col>
        </v-row>
</v-container>
<!-- How to join -->
 <v-container style="background-color:#CFD0D6" class="mt-12">
        <v-row>
            <v-col md="12">
                <div class="text-display-medium mb-12">How to join</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-list-item>1. Registration (You'll be required to provides your basic personal information e.g Full name, Phone number, Email address, Age / Date of birth, Emergency contact) </v-list-item>
                <v-list-item>2. Choose Membership Plan </v-list-item>
                <v-list-item>3. Make Payment</v-list-item>
                <v-list-item>4. Membership Activation</v-list-item>
            </v-col>
        </v-row>
  </v-container>  
</template>