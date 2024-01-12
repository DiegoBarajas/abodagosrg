import React from 'react';
import Title from './Title'
import ServicioItem from './ServicioItem';

import Familiar from '../assets/familia.png';
import Marcantil from '../assets/billetes-de-banco.png';
import Penal from '../assets/preso.png';
import Laboral from '../assets/chamba.png';
import Administrativa from '../assets/Administrativa.png';
import Agraria from '../assets/planta.png';
import Amparo from '../assets/Amparo.png';
import Civil from '../assets/Civil.png';

import '../styles/Servicios.css';

const Servicios = () => {
    return (
        <div id='Servicios'>
            <Title>Servicios</Title>
            <p className='subtitle-serv'>Primera asesoria sin costo*</p>

            <div className='container-services'>
                <ServicioItem
                    img={Familiar}
                    alt='Materia Familiar'
                    title='Materia Familiar'
                    description='Se ocupa de todos los asuntos legales que surgen dentro de las relaciones familiares, abarca una amplia gama de aspectos relacionados con las relaciones familiares y su regulación legal.'
                    examples='Se incluyen matrimonio, divorcio, custodia de los hijos, pensión alimenticia, adopción, paternidad, tutela, violencia doméstica, distribución de bienes en casos de separación.'
                />
                <ServicioItem
                    img={Civil}
                    alt='Materia Civil'
                    title='Materia Civil'
                    description='Encarga de regular las relaciones entre particulares, estableciendo normas y principios que rigen aspectos como los derechos de propiedad, las obligaciones contractuales, la responsabilidad civil, las relaciones familiares en aspectos no vinculados al derecho familiar especializado, y otros aspectos que no caen dentro del ámbito penal o administrativo.'
                    examples='Derecho de las obligaciones y contratos, derecho de propiedad, derecho de familia (aunque también tiene un componente familiar), derecho sucesorio, derecho de las personas (como la capacidad jurídica y la personalidad), derecho de las cosas, derecho de las obligaciones y contratos.'
                />
                <ServicioItem
                    img={Penal}
                    alt='Materia Penal'
                    title='Materia Penal'
                    description='Se centra en regular las conductas que son consideradas como delitos según la ley y en establecer las consecuencias legales para quienes cometen esos actos ilícitos.'
                    examples='Código penal, los tipos de delitos, penas correspondientes a cada delito, los procesos judiciales penales, libertad condicional y reinserción social de los condenados.'
                />
                <ServicioItem
                    img={Administrativa}
                    alt='Materia Administrativa'
                    title='Materia Administrativa'
                    description='Abarca las normativas y regulaciones relacionadas con la organización y funcionamiento de la administración pública.'
                    examples='Funcionamiento de los organismos gubernamentales, actuación de administración pública, procedimientos administrativos, potestad reglamentaria, contratación pública, control de la actividad administrativa, sanciones administrativas, concesiones y licencias.'
                />
                <ServicioItem
                    img={Marcantil}
                    alt='Materia Mercantil'
                    title='Materia Mercantil'
                    description='Abarca todas las normativas legales relacionadas con las actividades comerciales, transacciones financieras, contratos empresariales y regulaciones que rigen el comportamiento y las relaciones entre empresas y comerciantes.'
                    examples='Contratos comerciales, derecho societario (constitución, operación y disolución de empresas), títulos valores (cheques, pagarés, letras de cambio), propiedad intelectual, competencia desleal, marcas comerciales, fusiones y adquisiciones, derecho bancario, seguros, comercio internacional.'
                />


                <ServicioItem
                    img={Laboral}
                    alt='Materia Laboral'
                    title='Materia Laboral'
                    description='Se encarga de regular las relaciones entre empleadores y empleados, así como de establecer los derechos y obligaciones de ambas partes en el ámbito laboral.'
                    examples='Contratación laboral, condiciones de trabajo, salarios, prestaciones sociales, seguridad y salud laboral, conflictos laborales, despidos, indemnizaciones, sindicalización, negociación colectiva, horas de trabajo, vacaciones.'
                />
                <ServicioItem
                    img={Agraria}
                    alt='Materia Agraria'
                    title='Materia Agraria'
                    description='Se enfoca en regular las relaciones jurídicas relacionadas con la propiedad, el uso, la explotación y la distribución de la tierra y los recursos naturales, con un énfasis particular en el ámbito rural y agrícola. '
                    examples='Propiedad agraria, tenencia de la tierra, contratos agrarios, explotación de recursos naturales, producción agropecuaria, regulación de la actividad rural, protección del medio ambiente, políticas agrarias y de desarrollo rural.'
                />

                <ServicioItem
                    img={Amparo}
                    alt='Materia de Amparo'
                    title='Materia de Amparo'
                    description='Se centra en proteger los derechos fundamentales de las personas frente a actos de autoridad que puedan afectarlos, asegurando el respeto a la Constitución y la legalidad en la actuación de las autoridades.'
                    examples='Detenciones ilegales, restricciones a la libertad de expresión, violaciones al debido proceso, confiscación de bienes, entre otros. El amparo puede ser promovido tanto por personas físicas como morales.'
                />
            </div>
        </div>
    )
}

export default Servicios