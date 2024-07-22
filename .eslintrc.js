const importOrderGroups = ["builtin", "external", "internal", "sibling", "index", "unknown", "type"];
const importOrderCustomGroups = [
    {
        group: "internal",
        pattern: "@config/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@libs/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@controllers/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@models/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@stores/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@assets/**",
        position: "after",
    },
    {
        group: "sibling",
        pattern: "@components/**",
        position: "after",
    },
    {
        group: "type",
        pattern: "./*.{css,sass,scss}",
        position: "after",
    },
];

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    overrides: [
        {
            env: { node: true },
            files: [ ".eslintrc.{js,cjs}" ],
            parserOptions: { sourceType: "script" },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "import",
        "react",
        "@typescript-eslint",
        "sort-keys-fix",
        "sort-destructure-keys",
        "react-hooks",
        "@stylistic",
    ],
    rules: {
        "@stylistic/array-bracket-newline": ["error", { multiline: true }],
        "@stylistic/array-bracket-spacing": [
            "error", "never", {
                arraysInArrays: false,
                objectsInArrays: false,
                singleValue: true,
            },
        ],
        "@stylistic/array-element-newline": ["error", "consistent"],
        "@stylistic/arrow-parens": ["error", "as-needed"],
        "@stylistic/arrow-spacing": [
            "error", {
                after: true,
                before: true,
            },
        ],
        "@stylistic/block-spacing": ["error", "always"],
        "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "@stylistic/comma-dangle": ["error", "always-multiline"],
        "@stylistic/comma-spacing": [
            "error", {
                after: true,
                before: false,
            },
        ],
        "@stylistic/comma-style": ["error", "last"],
        "@stylistic/computed-property-spacing": ["error", "never"],
        "@stylistic/dot-location": ["error", "property"],
        "@stylistic/eol-last": ["error", "never"],
        "@stylistic/function-call-argument-newline": ["error", "consistent"],
        "@stylistic/function-call-spacing": ["error", "never"],
        "@stylistic/generator-star-spacing": [
            "error", {
                after: false,
                before: true,
            },
        ],
        "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/jsx-closing-bracket-location": "error",
        "@stylistic/jsx-closing-tag-location": "error",
        "@stylistic/jsx-curly-brace-presence": ["error", "never"],
        "@stylistic/jsx-curly-newline": [
            "error", {
                multiline: "require",
                singleline: "consistent",
            },
        ],
        "@stylistic/jsx-curly-spacing": [
            2, {
                attributes: { allowMultiline: true },
                children: true,
                spacing: { objectLiterals: "never" },
                when: "always",
            },
        ],
        "@stylistic/jsx-equals-spacing": ["error", "never"],
        "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
        "@stylistic/jsx-max-props-per-line": [
            "error", {
                maximum: {
                    multi: 1,
                    single: 3,
                },
            },
        ],
        "@stylistic/jsx-newline": ["error", { prevent: true }],
        "@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-line" }],
        "@stylistic/jsx-pascal-case": ["error", { allowNamespace: true }],
        "@stylistic/jsx-quotes": ["error", "prefer-double"],
        "@stylistic/jsx-sort-props": [
            "error", {
                callbacksLast: true,
                ignoreCase: true,
                multiline: "last",
                noSortAlphabetically: false,
                reservedFirst: true,
                shorthandFirst: true,
                shorthandLast: false,
            },
        ],
        "@stylistic/jsx-tag-spacing": [
            "error", {
                afterOpening: "never",
                beforeClosing: "never",
                beforeSelfClosing: "always",
                closingSlash: "never",
            },
        ],
        "@stylistic/jsx-wrap-multilines": [
            "error", {
                arrow: "parens-new-line",
                assignment: "parens-new-line",
                condition: "ignore",
                declaration: "parens-new-line",
                logical: "ignore",
                prop: "ignore",
                return: "parens-new-line",
            },
        ],
        "@stylistic/key-spacing": [
            "error", {
                afterColon: true,
                beforeColon: false,
                mode: "strict",
            },
        ],
        "@stylistic/keyword-spacing": [
            "error", {
                after: true,
                before: true,
            },
        ],
        "@stylistic/multiline-ternary": ["error", "always-multiline"],
        "@stylistic/new-parens": ["error", "always"],
        "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
        "@stylistic/no-extra-semi": "error",
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/no-multi-spaces": ["error", { ignoreEOLComments: true }],
        "@stylistic/no-multiple-empty-lines": [
            "error", {
                max: 2,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        "@stylistic/no-tabs": "error",
        "@stylistic/no-trailing-spaces": ["error", { ignoreComments: true }],
        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/object-curly-newline": [
            "error",
            {
                ExportDeclaration: {
                    consistent: true,
                    minProperties: 3,
                    multiline: true,
                },
                ImportDeclaration: {
                    consistent: true,
                    minProperties: 6,
                    multiline: true,
                },
                ObjectExpression: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                },
                ObjectPattern: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                },
            },
        ],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],
        "@stylistic/operator-linebreak": ["error", "after"],
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                next: "return",
                prev: "*",
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "any",
                next: ["const", "let", "var"],
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["case", "default"],
            },
        ],
        "@stylistic/quote-props": ["error", "as-needed"],
        "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: true }],
        "@stylistic/rest-spread-spacing": ["error", "never"],
        "@stylistic/semi": "error",
        "@stylistic/semi-spacing": "error",
        "@stylistic/semi-style": ["error", "last"],
        "@stylistic/space-before-blocks": "error",
        "@stylistic/space-before-function-paren": ["error", "never"],
        "@stylistic/space-in-parens": ["error", "never"],
        "@stylistic/space-infix-ops": "error",
        "@stylistic/space-unary-ops": "error",
        "@stylistic/spaced-comment": ["error", "always"],
        "@stylistic/switch-colon-spacing": "error",
        "@stylistic/template-curly-spacing": ["error", "always"],
        "@stylistic/type-annotation-spacing": "error",
        "@stylistic/type-generic-spacing": [ "error" ],
        "@stylistic/type-named-tuple-spacing": [ "error" ],
        "@stylistic/wrap-iife": ["error", "inside"],
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "import/exports-last": "error",
        "import/first": "error",
        "import/newline-after-import": ["error", { count: 1 }],
        "import/no-duplicates": "error",
        "import/order": [
            "error",
            {
                alphabetize: { order: "asc" },
                distinctGroup: true,
                groups: importOrderGroups,
                "newlines-between": "always",
                pathGroups: importOrderCustomGroups,
                pathGroupsExcludedImportTypes: [ "type" ],
            },
        ],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-restricted-imports": [
            "error", {
                patterns: [
                    {
                        group: [ "../" ],
                        message: "Relative imports are not allowed.",
                    },
                ],
            },
        ],
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "sort-destructure-keys/sort-destructure-keys": ["error", { caseSensitive: true }],
        "sort-keys-fix/sort-keys-fix": [
            "error",
            "asc",
            {
                caseSensitive: true,
                natural: true,
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};