<template>
  <div class="emoji-table">
    <div class="emoji-table-content">
      <div class="emoji-row" v-for="(row, rowIndex) in emojis" :key="rowIndex">
        <div
          class="emoji-item"
          v-for="emoji in row"
          :key="emoji.code"
          @click="selectEmoji(emoji.char)"
        >
          <span>{{ emoji.char }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmojiTable",
  data() {
    return {
      emojis: [
        [
          { char: "😀", code: "1F600" },
          { char: "😁", code: "1F601" },
          { char: "😂", code: "1F602" },
          { char: "🤣", code: "1F923" },
          { char: "😃", code: "1F603" },
          { char: "😄", code: "1F604" },
        ],
        [
          { char: "😅", code: "1F605" },
          { char: "😆", code: "1F606" },
          { char: "😉", code: "1F609" },
          { char: "😊", code: "1F60A" },
          { char: "😋", code: "1F60B" },
          { char: "😎", code: "1F60E" },
        ],
        [
          { char: "😍", code: "1F60D" },
          { char: "😘", code: "1F618" },
          { char: "😗", code: "1F617" },
          { char: "😙", code: "1F619" },
          { char: "😚", code: "1F61A" },
          { char: "😜", code: "1F61C" },
        ],
        [
          { char: "😝", code: "1F61D" },
          { char: "😛", code: "1F61B" },
          { char: "🤑", code: "1F911" },
          { char: "🤗", code: "1F917" },
          { char: "🤔", code: "1F914" },
          { char: "😶", code: "1F636" },
        ],
        [
          { char: "🙄", code: "1F644" },
          { char: "🤐", code: "1F910" },
          { char: "🤢", code: "1F922" },
          { char: "🤧", code: "1F927" },
          { char: "🥳", code: "1F973" },
          { char: "🥺", code: "1F97A" },
        ],
      ],
    };
  },
  methods: {
    selectEmoji(emoji) {
      this.$emit("emoji-selected", emoji);
    },
  },
};
</script>

<style scoped>
.emoji-table {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.emoji-table-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.emoji-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.emoji-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: background 0.3s ease;
  cursor: pointer;
}

.emoji-item:hover {
  background: #f0f0f0;
}
</style>
