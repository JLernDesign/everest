<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const formattedDate = useDateFormat(props.data.demoDate, "MM.DD.YY");
console.log(props.data);

onMounted(() => {
    if (props.data.signupForm.hubspotId) {
        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/v2.js";
        document.body.appendChild(script);
        script.addEventListener("load", () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: "48112164",
                    formId: props.data.signupForm.hubspotId,
                    target: "#hubspotForm",
                    css: "",
                });
            }
        });
    }

});
</script>

<template>
    <div class="border-t border-grayline py-thumb">
        <!-- columns -->
        <div class="relative mx-auto flex max-w-base flex-col items-start justify-between s:flex-row " ref="main">
            <!-- left -->
            <div class="text w-full s:w-1/2 s:pr-[11.5rem]">
                <BlogThumb :data="data.featuredVideo.post" loc="media" />
                Demo Thumb content here
            </div>

            <!-- right (form) -->
            <div
                class="relative w-full overflow-hidden rounded-base-mob bg-shadowblue px-[2.5rem]  text-white s:w-1/2 s:rounded-base s:p-[5rem] max-s:order-1 max-s:mt-[5rem] max-s:pb-[5rem]">
                <!-- eyebrow -->
                <div v-if="data.demoDate" class="eyebrow mb-6">
                    <h3 class="font-helvb text-body-xsm-mob uppercase text-red s:text-body-xsm">
                        {{ formattedDate }}
                    </h3>
                </div>

                <!-- header / intro -->
                <div class="has-break space-y-[2rem] s:space-y-[3.5rem]">
                    <h1 v-if="data.signupForm.headline"
                        class="text font-barlow-cond text-xl-mob leading-xl -tracking-sm s:text-xl"
                        v-html="formatText(data.signupForm.headline)"></h1>

                    <div v-if="data.signupForm.intro" class="max-w-[52rem]">
                        <p v-html="formatText(data.signupForm.intro)"></p>
                    </div>
                </div>

                <!-- hubspot form -->
                <div class="form landing-form">
                    <div id="hubspotForm" v-once
                        class="form [&_.hs-input]:leading-normal [&_input[type='submit']:hover]:text-lime [&_input[type='submit']]:leading-normal relative s:text-body-sm [&_.form-columns-1_.hs-input]:!w-full [&_.form-columns-2_.field+.field]:max-s:mt-[3rem] [&_.form-columns-2_input]:max-s:!w-full [&_.hs-form-field]:flex-1 [&_.hs-form-field_label]:text-body-sm-mob [&_.hs-form-field_label]:text-white [&_.hs-form-field_label]:opacity-75 [&_.hs-input]:mt-3 [&_.hs-input]:h-[5rem] [&_.hs-input]:w-full [&_.hs-input]:rounded-sm [&_.hs-input]:border-1 [&_.hs-input]:border-whiteline [&_.hs-input]:bg-[#363E49] [&_.hs-input]:!px-6 [&_.hs-input]:!pb-[1.125rem] [&_.hs-input]:!pt-[1.3125rem] [&_.hs-input]:text-body-sm-mob [&_.hs-input]:text-white [&_.hs-input]:outline-none [&_.hs-input]:s:mt-3 s:[&_.hs-input]:!px-[1.875rem] [&_fieldset]:w-full [&_fieldset]:!max-w-none [&_fieldset]:gap-[3.5rem] [&_fieldset]:s:flex [&_fieldset_.input]:max-s:!mr-0 [&_form]:space-y-[3rem] [&_input[type='checkbox']]:mt-0 [&_input[type='checkbox']]:h-auto [&_input[type='submit']]:mt-[1rem] [&_input[type='submit']]:w-auto [&_input[type='submit']]:min-w-[13.5rem] [&_input[type='submit']]:rounded-btn [&_input[type='submit']]:bg-red [&_input[type='submit']]:!px-[1.4rem] [&_input[type='submit']]:!py-[1.4rem] [&_input[type='submit']]:font-helvh [&_input[type='submit']]:text-body-sm-mob [&_input[type='submit']]:text-skyblue [&_select]:appearance-none [&_textarea]:!h-[13rem] [&_textarea]:!resize-none">
                    </div>
                </div>
                <!-- end hubspot form -->
            </div>
        </div>
    </div>
</template>