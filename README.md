# vue-ppp

A Popup Controller Based On Vue

# Install 

``` bash 
$ npm install --save vue-ppp
```

# Usage 

## Create Modal 

``` js
import HelloPPP from 'a/b/c/d/HelloPPP.vue';

var hello = this.$ppp.create({
    type: 'modal', 
    component: HelloPPP,
    vbind: {
        style: {
            backgroundColor: '#FFF'
        }
    }
});
hello.launch(); 
```


## Custom Transition Animate 

``` js
import PPPAlert from '@/components/popup/PPPAlert.vue'; 

var al = this.$ppp.create({
    type: 'modal', 
    component: PPPAlert, 
    vbind: {
        style: {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            color: '#fff'
        }
    },
    transitionName: 'alert'
}); 

al.launch();
```

css : 

``` css
.alert-enter-active, .alert-leave-active {
    transition: all .2s; 
}

.alert-enter, .alert-leave-to {
    transform: scale(1.3);
    opacity: 0; 
}
```
