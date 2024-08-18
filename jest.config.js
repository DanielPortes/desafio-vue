export default {
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
