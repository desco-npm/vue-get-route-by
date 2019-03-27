# @desco/vue-get-route-by

Recupera uma rota do VueRouter dado um nome ou path.

# Exemplo

## Inicializando

~~~
import getRouteBy from '@desco/vue-get-route-by' // Importa o pacote

// Importa os componentes das rotas
import DefaultTemplate from './DefaultTemplate'
import HomePage from './HomePage'
import ContactPage from './ContactPage'

// Cria as rotas
const routes = [
    {
        path: '/',
        name: 'DefaultTemplate',
        component: DefaultTemplate,
        children: [
            {
                path: '/',
                name: 'HomePage',
                component: HomePage,
                meta: {
                    topImage,
                },
            },
            {
                path: '/contato',
                name: 'ContactPage',
                component: ContactPage,
                meta: {
                    topImage,
                },
            },
        ],
    },
]

// Inicializa o @desco/getRouteBy com as rotas
getRouteBy.init(routes)
~~~

Ao inicializar o getRouteBy, todas as buscas são feitas automaticamente nestas rotas.

O método getRouteBy pode ser chamado em ***qualquer*** parte do código, inclusive para atualizar as rotas.

## Buscando a rota

~~~
<script>
import getRouteBy from '@desco/vue-get-route-by' // Importa o pacote

export default {
    name: 'Demo',
    mounted () {
        console.log(getRouteBy.name('HomePage')) // Busca pelo nome
        console.log(getRouteBy.path('/contato')) // Busca pelo path
        console.log(getRouteBy.otherProp('name', 'HomePage')) // Busca por outra propriedade
    },
}
</script>
~~~

## Buscando a partir de outra lista de rotas

~~~
<script>
import getRouteBy from '@desco/vue-get-route-by' // Importa o pacote
import routes from './routes'

export default {
    name: 'Demo',
    mounted () {
        console.log(getRouteBy.name('HomePage'), routes) // Busca pelo nome dentro de outra lista de rotas
        console.log(getRouteBy.path('/contato'), routes) // Busca pelo path dentro de outra lista de rotas
        console.log(getRouteBy.otherProp('name', 'HomePage', routes)) // Busca por outra propriedade dentro de outra lista de rotas
    },
}
</script>
~~~