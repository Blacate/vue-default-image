# vue-default-image

> vue default image component

### Development

```shell
npm run dev
```

development workspace: `./demo`

### Build

```shell
npm run build
```

### Usage

```shell
npm install https://github.com/Blacate/vue-default-image.git
```



```vue
<template>
	<div class="main">
		<vue-default-image src="https://www.baidu.com/logo.png" />
	</div>
</template>

<script>
import { VueDefaultImage } from 'vue-default-image'
    
export default {
    components: {
        VueDefaultImage,
    }
}
</script>
```

or

```javascript
import Vue from 'vue'
import VueDefaultImage from 'vue-default-image'

Vue.use(VueDefaultImage)

// ....
```

