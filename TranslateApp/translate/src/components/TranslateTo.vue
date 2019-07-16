<template>
    <div class="translateTo">
        <div class="form-group">
            <label for="exampleTextarea">翻译的文本</label>
            <textarea class="form-control" id="exampleTextarea" rows="3">{{text}}</textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "translateTo",
        props:[
            "text"
        ]
    }
</script>

<style scoped>
textarea{
    width: 300px;
    margin: 0 auto;
    color: #000;
}
</style>