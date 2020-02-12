import { Injectable } from '@angular/core';

/** Interface */
export interface Hero {
    name : String,
    realName : String,
    dateFirstAppearance : String,
    firstAppearance : String,
    avatarUrl : String,
    bio : String,
    franchise : String
}

@Injectable()
export class HeroesService {

    private heroes : Hero[] = [
        {
            name: 'Aquaman',
            realName: 'Arthur Curry',
            avatarUrl: './assets/images/aquaman.jpg',
            dateFirstAppearance: '1941-11-01',
            firstAppearance: 'More Fun Comics #73',
            bio: 'Rey de la Atlántida, así como un superhéroe que se hizo conocido como el Aquaman. Aunque inicialmente estaba reservado y contento con su aislamiento del mundo de la superficie, Aquaman eventualmente sería reclutado por Batman para unirse a la Liga de la Justicia con el fin de ayudar a defender la Tierra contra las fuerzas de Steppenwolf y su ejército Parademon.',
            franchise: 'DC Comics'
        },
        {
            name: 'Batman',
            realName: 'Bruce Wayne',
            dateFirstAppearance: '1939-03-30',
            firstAppearance: 'Showcase #4',
            avatarUrl: './assets/images/batman.jpg',
            bio: 'CEO de Wayne Enterprises y el principal vigilante que opera en Gotham City, Nueva Jersey, conocido como Batman. Después de presenciar el asesinato de sus padres a manos de un asaltante cuando era niño, Bruce libró una guerra contra el crimen en Gotham City durante más de 20 años antes de la Batalla de Metrópolis. Con los años, Bruce se encontró con numerosos enemigos, especialmente Oswald Cobblepot y el Joker. También fue mentor de Jason Todd para ayudarlo como Robin, aunque Todd fue secuestrado, torturado y asesinado por el Joker y su médico, Harley Quinn. Batman luego detuvo a Deadshot y Harley, y persiguió a un prometedor Killer Croc de Gotham durante su intento de formar otro imperio criminal en la ciudad. Después de la muerte de Robin, Bruce se convirtió en un guardián cada vez más despiadado de Gotham City, ya que los criminales desconfiaban de su ahora brutal reputación.',
            franchise: 'DC Comics'
        },
        {
            name: 'Flash',
            realName: 'Bartholomew Henry Allen',
            dateFirstAppearance: '1956-10-01',
            firstAppearance: 'Showcase #4',
            avatarUrl: './assets/images/flash.jpg',
            bio: 'Estudiante de la Universidad Central City que fue alcanzado por un rayo, obteniendo la capacidad de pensar y moverse a velocidades superhumanas increíbles. Usando estos poderes, se convirtió en el héroe vigilante conocido como Flash. Eventualmente, Lex Luthor lo descubrió y Bruce Wayne lo reclutó para ser miembro de la Liga de la Justicia para ayudar a defender la Tierra después de la muerte de Superman. Después de su reclutamiento para el equipo, Flash jugó un papel fundamental en la resurrección de Superman.',
            franchise: 'DC Comics'
        },
        {
            name: 'Green Arrow',
            realName: 'Oliver Jonas Queen',
            dateFirstAppearance: '1941-11-01',
            firstAppearance: 'More Fun Comics #73',
            avatarUrl: './assets/images/green-arrow.jpg',
            bio: 'Luego de naufragar después de que el yate de su familia se hundiera, Oliver llegó a Lian Yu, una isla en donde se embarcó en una misión de supervivencia y autodescubrimiento, aprendiendo habilidades de supervivencia. Exmillonario regresó a su hogar con la misión de salvar a su ciudad del crimen y la corrupción. Comenzó su cruzada como un arquero conocido como \"El Encapuchado\" posterior a esto luego de luchar y casi perder la vida regresa como \"El Arquero Esmeralda\" con el nombre clave Flecha Verde.',
            franchise: 'DC Comics'
        },
        {
            name: 'Green Lantern',
            realName: ' Hal Jordan, Kyle Rayner, John Stewart y Guy Gardner',
            dateFirstAppearance: '1959-10-01',
            firstAppearance: 'Showcase #22',
            avatarUrl: './assets/images/green-lantern.jpg',
            bio: 'Creados para preservar el orden intergaláctico, los Linternas Verdes han existido durante varios siglos. Su más reciente recluta, Hal Jordan, es el primer humano en unirse a sus filas. Los Linternas Verdes les tienen poco respeto a los humanos, que hasta ahora han sido incapaces de aprovechar los poderes de los anillos que usa cada miembro. Pero Jordan, un habilidoso piloto de pruebas tiene que enfrentarse a un nuevo enemigo llamado Parallax quien amenaza al universo. La tierr solo ha tenido 4 Linternas verdes',
            franchise: 'DC Comics'
        },
        {
            name: 'SuperGirl',
            realName: 'Kara Zor-El',
            dateFirstAppearance: '1958-08-18',
            firstAppearance: 'Superman #123',
            avatarUrl: './assets/images/supergirl.jpg',
            bio: 'Adopta la identidad secreta de Linda Lee, residente del orfanato Midvale. Ella oculta su cabello rubio debajo de una peluca morena y funciona como Supergirl solo en secreto, a pedido de Superman, hasta que pueda obtener, en su opinión, el control suficiente de sus poderes, y la sabiduría para usarlos adecuadamente. Después de ser adoptada por Fred y Edna Danvers, Superman decide que su prima está lista para comenzar a operar abiertamente como Supergirl.',
            franchise: 'DC Comics'
        },
        {
            name: 'Superman',
            realName: 'Kal-El',
            dateFirstAppearance: '1938-04-18',
            firstAppearance: 'Action Comics #1',
            avatarUrl: './assets/images/superman.jpg',
            bio: 'Único sobreviviente del planeta Krypton. Su padre, Jor-El lo envia en una nave que aterrizó en la Tierra. Jonathan y Martha Kent encontraron a un niño dentro lo que parecia un artefacto volador, lo llevaron a su granja en Smallville, Kansas lo llamarian Clark Joseph Kent. Cuando Clark creció, su cuerpo kryptoniano comenzó a desarrollar habilidades sobrehumanas. Entonces decidió usar sus poderes para el bien de la humanidad. Después de revelar su secreto a su amiga de la infancia, Lana Lang, Clark deja Smallville para estudiar en la Universidad Metropolis.',
            franchise: 'DC Comics'
        },
        {
            name: 'Wonder Woman',
            realName: 'Diana Prince',
            dateFirstAppearance: '1941-10-21',
            firstAppearance: 'All Star Comics #8 / Sensation Comics #1',
            avatarUrl: './assets/images/wonder-woman.jpg',
            bio: 'En los tiempos modernos, Diana opera como curadora del Museo del Louvre como Diana Prince. Dos años después de la Batalla de Metrópolis, Diana entró en conflicto con Lex Luthor, quien descubrió una fotografía de Diana y los Hombres Maravilla durante su búsqueda de metahumanos. Durante su búsqueda de Luthor, Diana se cruzó con Bruce Wayne, quien descubrió su secreto. El Día del Juicio Final llevó a Diana a aliarse con Superman y Batman para derrotar al monstruo en una feroz batalla que terminó con la trágica muerte de Superman.',
            franchise: 'DC Comics'
        }
    ];

    constructor() {
        console .log( 'HeroesService listo para usarse' );
    }

    public getAll() : Hero[] {
        return this .heroes;
    }

    /** Obtiene el heroe por la posición dentro del Array de Heroes, no por Id por que la interface no posee esta propiedad */
    public getByPosition( item: number ) {
        return this .heroes[ item ];
    }
}
