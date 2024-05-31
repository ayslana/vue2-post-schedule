<template>
  <div class="input-container" @click.self="closeEmojiTable">
    <textarea
      v-model="inputText"
      placeholder="Aqui vai o texto descritivo desse post"
      @input="updateInput"
    ></textarea>
    <div class="icon-container">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        @click.stop="toggleEmojiTable"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="8" y1="15" x2="16" y2="15"></line>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
      <div v-if="isEmojiTableVisible" class="emoji-table-container">
        <EmojiTable @emoji-selected="addEmoji" />
      </div>
    </div>
  </div>
</template>

<script>
import EmojiTable from "./EmojiTable.vue";

export default {
  components: {
    EmojiTable,
  },
  data() {
    return {
      inputText: "",
      isEmojiTableVisible: false,
    };
  },
  methods: {
    updateInput(event) {
      this.inputText = event.target.value;
    },
    addEmoji(emoji) {
      this.inputText += emoji;
    },
    toggleEmojiTable() {
      this.isEmojiTableVisible = !this.isEmojiTableVisible;
    },
    closeEmojiTable() {
      this.isEmojiTableVisible = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.closeEmojiTable();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

textarea {
  border: none;
  outline: none;
  resize: none;
  width: calc(100% - 32px);
  height: 100px;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  flex-grow: 1;
}

textarea::placeholder {
  color: #999;
}

.icon-container {
  position: relative;
}

.icon {
  width: 24px;
  height: 24px;
  margin-top: 8px;
  flex-shrink: 0;
  cursor: pointer;
}

.emoji-table-container {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 1000;
  width: max-content;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
