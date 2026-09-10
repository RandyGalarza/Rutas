# 🤖 Registro de Auditoría de IA (AI-LOG)

**Estudiante:** Randy Galarza 
**Semana:** 3
**Proyecto:** RouteGo - Aplicación de rutas universitarias de Riohacha

## 1. Prompts Utilizados

* *"Completa una aplicación de rutas para que muestre correctamente el mapa de Riohacha en cada ruta."*
* *"Agrega paradas marcadas en el mapa, zoom, desplazamiento y controles para acercar y alejar."*
* *"Usa un mapa real con calles y datos abiertos, similar a Google Maps."*
* *"Mejora visualmente la pantalla de inicio y el menú de navegación inferior."*
* *"Corrige los errores encontrados en Expo Router, TypeScript y la visualización web del mapa."*

## 2. Código Generado vs. Código Modificado

* **¿Qué generó la IA?:** La implementación de una pantalla de rutas con ocho recorridos universitarios de Riohacha, incluyendo nombres, horarios, duración, paradas y coordenadas. También generó el dashboard de inicio, la navegación inferior estilizada, las pantallas de login y registro de prueba, y la integración del mapa web con Leaflet y OpenStreetMap.

* **¿Qué modifiqué/corregí?:** Se organizaron los componentes del mapa por plataforma. La versión web utiliza Leaflet con teselas de OpenStreetMap y la versión móvil utiliza `react-native-maps`. Se añadieron marcadores interactivos, polilíneas, zoom, desplazamiento y popups con la información de cada parada. También se corrigió el layout raíz para usar `Stack`, se completaron las pantallas vacías y se rediseñó el dashboard principal.

* **Archivos principales modificados:** `app/(tabs)/index.tsx`, `app/(tabs)/routes.tsx`, `app/(tabs)/_layout.tsx`, `app/_layout.tsx`, `app/auth/login.tsx`, `app/auth/register.tsx`, `app/modal.tsx`, `app/+not-found.tsx`, `src/components/route-map.web.tsx`, `src/components/route-map.native.tsx` y `src/components/route-map.tsx`.

## 3. Alucinaciones o Errores Detectados

* La aplicación cargaba `react-native-maps` durante la ejecución web y producía el error `codegenNativeComponent is not a function`. Se corrigió separando el mapa web del mapa nativo y haciendo que el puente use la implementación web como fallback.

* El mapa web inicial era una representación visual estática y no mostraba calles reales. Se reemplazó por Leaflet usando teselas abiertas de OpenStreetMap, con la atribución correspondiente.

* `routes.tsx` solo contenía los datos de las rutas y no exportaba una pantalla visible. Se agregó la interfaz con selector de rutas, mapa, recorrido, resumen y lista de paradas.

* Los archivos `login.tsx`, `register.tsx`, `modal.tsx` y `+not-found.tsx` estaban vacíos o no tenían exportación por defecto. Se crearon componentes de prueba válidos para evitar advertencias de Expo Router.

* El layout raíz estaba configurado como `Tabs`, aunque la navegación de pestañas pertenecía a `app/(tabs)/_layout.tsx`. Se corrigió el layout raíz para usar `Stack`.

* TypeScript no reconocía inicialmente la importación de `MapView` como exportación nombrada. Se corrigió utilizando la exportación por defecto de `react-native-maps`.

* El trazado de las rutas utiliza líneas entre coordenadas demostrativas y todavía no calcula automáticamente el camino real por las calles. Para una versión de producción se debe integrar un servicio de enrutamiento basado en OpenStreetMap.

* **Validaciones realizadas:** `npx tsc --noEmit` finalizó sin errores y `npx expo export --platform web` generó correctamente las rutas web de la aplicación.
