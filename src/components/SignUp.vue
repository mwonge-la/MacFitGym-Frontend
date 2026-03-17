<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();
const { register, loading, error } = useAuth()

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)

  const ConfirmPassword = ref(null)
  const show1confirm = ref(false)

  const signUp = async () => {

    loading.value = true;
    error.value = "";

    const formData = new FormData();
    formData.append("name", firstName.value +' '+ lastName.value,);
    formData.append("email", email.value);
    formData.append("phoneNumber", phoneNumber.value);
    formData.append("dob", dob.value);
    formData.append("gender", gender.value);
    formData.append("gymLocation", gymLocation.value);
    formData.append("password", password.value);
    formData.append("role_id", 4);

    try {
        await register(formData)
    
        // Redirect after successful signup
        router.push('/homepage').then(() => {
            router.go(0); // Reloads the current route
        });
    } catch (err) {
        // Error is already handled by the auth service
        console.error('Sign up failed', err)
    }
};
</script>

<template>
  <v-container width="50%" class="text-center mt-12">
    <v-row>
        <v-col>
            <v-form>
                <v-row>
                        <v-col md="12">
                            <div class="text-display-small font-weight-medium">Sign up to MacFit Gym</div>
                        </v-col>
                    </v-row>
            <v-row>
                    <v-col md="6">
                        <v-icon color="#3A4B68" icon="mdi-dumbbell" size="large" class="mt-8"></v-icon>
                    </v-col>
                </v-row>
            <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Firstname</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Lastname</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Email</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Phone Number</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field variant="outlined" type="number"></v-text-field>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Gender</div>
                    </v-col>
                    <v-col md="6">
                        <v-radio-group inline>
                            <v-radio label="Male" value="male"></v-radio>
                            <v-radio label="Female" value="female"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Date of Birth</div>
                    </v-col>
                    <v-col md="6">
                        <v-date-input variant="outline"></v-date-input>
                    </v-col>
                </v-row>

                 <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Gym Location</div>
                    </v-col>
                    <v-col md="6">
                    <v-select
                        label="Select"
                        :items="['Si Bidii', 'Madaraka', 'Westlands', 'Buruburu']"
                        variant="outlined"
                    ></v-select>
                    </v-col>
                </v-row>
           <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Password</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field
                                v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    variant="outlined"
                    @click:append="show1 = !show1">
                </v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="6" class="text-display-small font-weight-medium text-right">
                        <div>Confirm Password</div>
                    </v-col>
                    <v-col md="6">
                        <v-text-field
                                v-model="ConfirmPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1confirm ? 'text' : 'password'"
                    variant="outlined"
                    @click:append="show1 = !show1">
                </v-text-field>
                    </v-col>
                </v-row>
               <v-row>
                    <v-col md="12">
                        <v-btn color="#3A4B68" variant="elevated">Login</v-btn>
                    </v-col>
                </v-row>
            <v-row>
                    <v-col md="12">
                        <div>New to MacFit Gym? Create an Accont</div>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
  </v-container>

  
</template>