import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Monitoreo hidro-meteorológico',
    Svg: require('@site/static/img/feature-monitoreo.svg').default,
    description: (
      <>
        Instalación y operación de estaciones para medir precipitación,
        temperatura, radiación, humedad y caudal en la parroquia rural de
        Santa Ana, cantón Cuenca.
      </>
    ),
  },
  {
    title: 'Tecnología inalámbrica LoRaWAN',
    Svg: require('@site/static/img/feature-lorawan.svg').default,
    description: (
      <>
        Transmisión de datos en tiempo real mediante tecnología LoRaWAN e IoT
        hacia la plataforma del PROMAS, validada en un banco de pruebas en el
        campus Balzay.
      </>
    ),
  },
  {
    title: 'Vinculación con la comunidad',
    Svg: require('@site/static/img/feature-comunidad.svg').default,
    description: (
      <>
        En alianza con el GAD Parroquial de Santa Ana, beneficia a 7&nbsp;027
        personas y fortalece la gestión sostenible del agua (ODS&nbsp;6).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
