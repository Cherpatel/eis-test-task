const { propertyGroups } = require("stylelint-config-clean-order");

const propertiesOrder = propertyGroups.map(properties => ({
    emptyLineBefore: "always",
    noEmptyLineBetween: true,
    properties,
}));

module.exports = {
    extends: [ "stylelint-config-standard-scss" ],
    plugins: [ "stylelint-order" ],
    rules: {
        "at-rule-empty-line-before": null,
        "declaration-empty-line-before": null,
        "font-family-no-missing-generic-family-keyword": null,
        "order/properties-order": [
            propertiesOrder,
            {
                emptyLineBeforeUnspecified: "always",
                severity: "error",
                unspecified: "bottomAlphabetical",
            },
        ],
        "selector-class-pattern": [
            "^[a-z]+[a-zA-Z0-9]*$",
            {
                message: "Class names should be in camelCase",
            },
        ],
    },
};