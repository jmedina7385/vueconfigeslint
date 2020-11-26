module.exports = {
  root: true,
  env: {
    // this section will be used to determine which APIs are available to us
    // (i.e are we running in a browser environment or a node.js env)
    /*esta sección se utilizará para determinar qué API están disponibles para nosotros
    (es decir, estamos ejecutando en un entorno de navegador o un entorno de node.js)*/
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    //especificar un tipo de fuente de módulo evita que eslint marque declaraciones de importación como errores
    sourceType: "module"
  },
  extends: [
    // add more generic rulesets here, such as:
    //"plugin:vue/essential",
    //'plugin:vue/vue3-recommended',
    // "plugin:vue/strongly-recommended",
    /*use el conjunto de reglas recomendado para javascript simple y vue*/
    'eslint:recommended',
    'plugin:vue/recommended'// Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',

    //Config. del valor por default de las porpiedades (props)
    //Requerir valor predeterminado para las propiedades (props)
    'vue/require-default-prop': 'warn',

    //Config. de los espacios soportados en los corchetes de cierre de los tag html (etiquetas)
    //Requerir o no permitir un espacio antes de los corchetes de cierre de la etiqueta
    "vue/html-closing-bracket-spacing": ["error", { //error, warn (advertencia), off (deshabilitado)
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never"
    }],
    //Config. del número máximo de atributos soportados por los tag html (etiquetas)
    //Hacer cumplir el número máximo de atributos por línea
    "vue/max-attributes-per-line": ["error", { //error, warn (advertencia), off (deshabilitado)
      "singleline": 2,
      "multiline": {
        "max": 2,
        "allowFirstLine": false
      }
    }],
    //Config. de estilo de cierre automático de las tag html (etiquetas)
    //Hacer cumplir el estilo de cierre automático
    "vue/html-self-closing": ["error", { //error, warn (advertencia), off (deshabilitado)
      "html": {
        "void": "always", //never default
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    //Config. de las sangría en los <template>
    //Aplicar sangría coherente en <template>
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    //Config. de mayúsculas y minúsculas específicas para el nombre de los componentes
    //Aplicar mayúsculas y minúsculas específicas para el nombre de la definición del componente
    "vue/component-definition-name-casing": ["error", "kebab-case"], //"PascalCase" | "kebab-case"
    "vue/comment-directive": "off",

    // we should always disable console logs and debugging in production
    //siempre debemos deshabilitar los registros de la consola y la depuración en producción
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }

}
