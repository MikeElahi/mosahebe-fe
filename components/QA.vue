<template>
    <div class="flex flex-col items-start border-b-2 border-gray-800 mb-3 pb-2">
        <div class="flex flex-row justify-between items-stretch w-full mb-3">
            <h1 class="text-2xl font-bold">
                <span class="text-gray-500 select-none">Q:</span>
                {{ question }}
            </h1>
        </div>
        <p class="text-justify">{{ answer }}</p>
        <div class="flex flex-row justify-end items-center w-full mt-3">
            <UButton v-if="!has_liked" @click="like" size="sm" variant="link" color="gray"><UIcon name="i-heroicons-hand-thumb-up"/></UButton>
            <p v-if="has_liked" class="text-green-900 mr-3">Thanks!</p>
            <UBadge size="xs" variant="solid" class="select-none" :color="badge_color">{{ difficulty }}</UBadge>
        </div>
    </div>
</template>
<script>
    const DifficultyLevel = {
        BEGINNER: 'Beginner',
        JUNIOR: 'Junior',
        INTERMEDIATE: 'Intermediate',
        SENIOR: 'Senior',
    }

    export default {
        props: {
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            },
            difficulty: {
                type: String,
                required: false,
                default: DifficultyLevel.BEGINNER,
                validator: function (value) {
                    return [
                        DifficultyLevel.BEGINNER,
                        DifficultyLevel.JUNIOR,
                        DifficultyLevel.INTERMEDIATE,
                        DifficultyLevel.SENIOR
                    ].includes(value)
                }
            }
        },
        computed: {
            badge_color() {
                switch (this.difficulty) {
                    case DifficultyLevel.BEGINNER:
                        return 'green'
                    case DifficultyLevel.JUNIOR:
                        return 'sky'
                    case DifficultyLevel.INTERMEDIATE:
                        return 'yellow'
                    case DifficultyLevel.SENIOR:
                        return 'orange'
                }
            }
        },
        data() {
            return {
                has_liked: false
            }
        },
        methods: {
            like() {
                console.log("User loved this question")
                this.has_liked = true
            }
        }
    }
</script>