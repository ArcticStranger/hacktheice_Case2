<template>
  <div class="city-autocomplete">
    <div class="input-container">
      <input
        v-model="searchQuery"
        @input="onInput"
        @focus="showSuggestions = true"
        @blur="hideSuggestions"
        @keydown.down="navigateDown"
        @keydown.up="navigateUp"
        @keydown.enter="selectCity(filteredCities[selectedIndex])"
        @keydown.esc="hideSuggestions"
        :placeholder="placeholder"
        class="search-input-with-autocomplete"
        ref="inputRef"
      />
      <div class="input-icon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
            fill="#6B7280"
          />
        </svg>
      </div>
    </div>

    <div v-if="showSuggestions && filteredCities.length > 0" class="suggestions-container">
      <div
        v-for="(city, index) in filteredCities"
        :key="city.id"
        @mousedown="selectCity(city)"
        @mouseenter="selectedIndex = index"
        class="suggestion-item"
        :class="{ selected: selectedIndex === index }"
      >
        <div class="city-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="city-info">
          <span class="city-name">{{ city.name }}</span>
          <span v-if="city.region" class="city-region">{{ city.region }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAutocomplete',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Укажите город',
    },
    cities: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'select'],
  data() {
    return {
      searchQuery: this.modelValue,
      showSuggestions: false,
      selectedIndex: -1,
    }
  },
  computed: {
    filteredCities() {
      if (!this.searchQuery.trim()) {
        // Показываем популярные города когда поле пустое
        return this.cities.slice(0, 6)
      }

      const query = this.searchQuery.toLowerCase().trim()
      return this.cities
        .filter(
          (city) =>
            city.name.toLowerCase().includes(query) ||
            (city.region && city.region.toLowerCase().includes(query))
        )
        .slice(0, 8) // Ограничиваем до 8 результатов
    },
  },
  watch: {
    modelValue(newVal) {
      this.searchQuery = newVal
    },
  },
  methods: {
    onInput() {
      this.$emit('update:modelValue', this.searchQuery)
      this.selectedIndex = -1
    },

    selectCity(city) {
      this.searchQuery = city.name
      this.$emit('update:modelValue', city.name)
      this.$emit('select', city)
      this.hideSuggestions()
      this.$refs.inputRef.blur()
    },

    hideSuggestions() {
      // Используем setTimeout чтобы успел сработать клик по элементу
      setTimeout(() => {
        this.showSuggestions = false
        this.selectedIndex = -1
      }, 150)
    },

    navigateDown() {
      if (this.showSuggestions && this.filteredCities.length > 0) {
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredCities.length
      }
    },

    navigateUp() {
      if (this.showSuggestions && this.filteredCities.length > 0) {
        this.selectedIndex =
          this.selectedIndex <= 0 ? this.filteredCities.length - 1 : this.selectedIndex - 1
      }
    },
  },
}
</script>

<style scoped>
.city-autocomplete {
  position: relative;
  width: 100%;
}

.input-container {
  position: relative;
  width: 100%;
}

.search-input-with-autocomplete {
  width: 100%;
  height: 52px;
  padding: 0.875rem 0.875rem 0.875rem 3.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  background: #f9fafb;
  color: #374151;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.search-input-with-autocomplete:focus {
  background: white;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-input-with-autocomplete::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

.suggestions-container {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f9fafb;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover,
.suggestion-item.selected {
  background: rgba(102, 126, 234, 0.05);
  color: #667eea;
}

.suggestion-item:hover .city-icon,
.suggestion-item.selected .city-icon {
  color: #667eea;
}

.suggestion-item.selected {
  background: rgba(102, 126, 234, 0.1);
}

.city-icon {
  color: #9ca3af;
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.city-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.city-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-region {
  font-size: 0.8rem;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Адаптивность */
@media (max-width: 480px) {
  .suggestion-item {
    padding: 0.75rem;
  }

  .city-name {
    font-size: 0.85rem;
  }

  .city-region {
    font-size: 0.75rem;
  }
}
</style>
