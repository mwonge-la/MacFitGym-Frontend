<script setup>

</script>

<template>

    <v-container max-width="100%">
        <v-row>
            <v-carousel>
            <v-carousel-item src="/pic3.jpg" cover></v-carousel-item>
            <v-carousel-item src="/pic4.jpg" cover></v-carousel-item>
            <v-carousel-item src="/pic.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>

   <!-- About Us -->
     <v-container color="#A6AD1E" max-width="100%">
        <v-row>
            <v-col md="8" class="text-center">
                <div class="text-display-medium mb-12">Welcome to MacFit Gym. </div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our Gym Management System is designed to simplify how fitness centers handle their daily operations. From managing memberships to tracking attendance and payments, our platform brings everything together in one easy-to-use system.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">We built the app to support gyms of all sizes, helping owners and staff save time and stay organized. With tools for member management, class scheduling, and automated billing, running a gym becomes more efficient and stress-free.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our goal is to help gyms focus on what matters most—supporting members and building a strong fitness community. By combining smart features with a user-friendly design, our system makes gym management simpler and more effective. 💪</div>
                <v-btn color="#A6AD1E">LEARN MORE</v-btn>
            </v-col>
            <v-col md="3">
                <v-container class="d-flex align-center justify-center fill-height">
                <v-img src="pic3.jpg"></v-img>
                </v-container>
            </v-col>
        </v-row>
     </v-container>
<!-- Latest News -->
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="pic.jpg" cover></v-img>
                    <v-card-title>Always try to keep fit </v-card-title>
                    <v-card-text>Your daily routine dictates the quality of your health fittness</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="pic1.jpg" cover></v-img>
                    <v-card-title>Always try to keep fit </v-card-title>
                    <v-card-text>Your daily routine dictates the quality of your health fittness</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="pic2.jpg" cover></v-img>
                    <v-card-title>Always try to keep fit </v-card-title>
                    <v-card-text>Your daily routine dictates the quality of your health fittness</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Reviews -->
<v-container>
    <v-row>
        <v-col md="3">
            <v-card color="#CFD0D6">
                <v-card-text>MacFit focuses on what matters most especially supporting members and building a strong fitness community</v-card-text>
                <v-rating :length="5" :size="32" :model-value="3" active-color='primary'></v-rating>
            </v-card>
        </v-col>

         <v-col md="3">
            <v-card color="#CFD0D6">
                <v-card-text>sample review</v-card-text>
                <v-rating :length="5" :size="32" :model-value="4" active-color='primary'></v-rating>
            </v-card>
        </v-col>

         <v-col md="3">
            <v-card color="#CFD0D6">
                <v-card-text>sample review</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color='primary'></v-rating>
            </v-card>
        </v-col>
    </v-row>
</v-container>

<!-- Contact Us -->
<v-container color="#A6AD1E" max-width="100%">
    <v-row class="text-center">
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Get in touch</div>
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">0741199690 | stillblondy@gmail.com</div>
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Opening Hours</div>
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Mon-Fri: 5.00am - 9.30pm | Sat: 6am - 6pm |Sun: 7am - 3pm</div>
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">MaFit Gym, 4th Floor, 110 City, </div>
        <div class="text-title-large font-weight-light text-medium-emphasis mb-8">&copy; 2025 MacFit Gym. Designed by G. Mwongela Designs</div>
    </v-row>
</v-container>
</template>