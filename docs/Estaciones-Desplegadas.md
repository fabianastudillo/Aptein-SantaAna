---
sidebar_position: 7
sidebar_label: Estaciones desplegadas
---

# 7. Estaciones desplegadas

El proyecto desplegó estaciones de monitoreo hidro-meteorológico en dos escenarios: un **banco de pruebas** en el campus Balzay de la Universidad de Cuenca y la instalación **in situ** en la parroquia rural de Santa Ana. Los datos se transmiten mediante tecnología inalámbrica **LoRaWAN** hacia la plataforma **IoT del PROMAS**.

## Banco de pruebas — Campus Balzay

Estaciones del PROMAS habilitadas con tecnología LoRaWAN para validar la transmisión y cobertura antes del despliegue en campo.

| Estación | Variable(s) monitoreada(s) | Tecnología | Estado |
|---|---|---|---|
| Estación multi-paramétrica | Precipitación, temperatura, radiación, humedad relativa, viento | LoRaWAN | En funcionamiento |
| Estación de nivel / caudal | Nivel y caudal | LoRaWAN | En funcionamiento |
| Estación pluviométrica | Precipitación | LoRaWAN | En funcionamiento |
| Gateway LoRaWAN | Concentrador de datos | LoRaWAN + servidor TTN (VM DTIC) | En funcionamiento |

> Se realizó la **medición de cobertura LoRaWAN** en el campus Balzay para caracterizar el alcance de la red.

## Instalación in situ — Parroquia rural de Santa Ana

| Estación | Variable(s) monitoreada(s) | Tecnología | Estado |
|---|---|---|---|
| Estación hidro-meteorológica convencional | Precipitación, temperatura, caudal | Convencional | En funcionamiento |
| Estación hidro-meteorológica inalámbrica | Precipitación, temperatura, radiación, humedad, caudal | LoRaWAN | En funcionamiento |
| Gateway LoRaWAN (área de estudio) | Concentrador de datos | LoRaWAN | En funcionamiento |

## Plataforma de datos

- **Servidor:** The Things Network (TTN) sobre una máquina virtual gestionada en la DTIC.
- **Visualización:** plataforma IoT del PROMAS, con recepción de datos hidro-meteorológicos en **tiempo real**.

> Los datos de las estaciones de la junta parroquial se transmiten hacia la plataforma IoT del PROMAS, permitiendo el monitoreo continuo de las variables hidro-meteorológicas del área de estudio.
