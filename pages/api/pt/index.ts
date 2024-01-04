import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {

    try {
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(
            { 
                box1:
                { 
                    title: 'react native', 
                    subTitle: 'desenvolvedor mobile',
                    backContent: '+55 11 95367-0683',
                    backContent2: 'danielwalterrodrigues@gmail',
                },
                tarotmagia: {
                    title: 'tarot magia', 
                    subTitle: 'expo / android app',
                    backContent: 'Aplicativo desenhado e programado em Expo / React Native',
                    backContent2: '',
                    description: 'O projeto Tarot Magia surgiu quando comecei a estudar React Native. Buscando produzir algo diferente do que apenas replicar os apps ensinados nos cursos e aulas no youtube, comecei a planejar algo que pudesse se tornar algo popular',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/tarotmagia_logo.png?alt=media&token=e90729af-ff0d-42db-b58b-647e2d7f00fe',
                    numImages: 3,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/tarotmagia1.png?alt=media&token=6448030c-65a2-4bf2-88cd-7ba8fe48806b'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/tarotmagia2.png?alt=media&token=fa1bcee5-ad9e-403f-893d-dca2e380ff48'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/tarotmagia3.png?alt=media&token=490bec74-4027-475b-a160-92ff1df33987'}
                        ],
                    tags: [
                        {tag: 'react-native'},
                        {tag: 'expo'},
                        {tag: 'AsyncStorage'},
                        {tag: 'UX/UI'},
                        {tag: 'Adobe Photoshop'},
                        {tag: 'Android'},
                        {tag: 'PlayStore'},
                        {tag: '.map'}
                    ]
                },
                vyttra: {
                    title: 'vyttra proxima', 
                    subTitle: 'android / ios app',
                    backContent: 'App para controle avançado de diabetes',
                    backContent2: '',
                    description: 'Vyttra Proxima é um completo aplicativo para controle da diabetes. Acompanha o dia a dia do paciente, desde os vários registros diários de glicemia e consumo de carboidratos, até o acompanhamento para tomada de medicamentos, registros de metas glicêmicas, incluindo geração automática de relatórios médicos e afins. Um aplicatido excepcionalmente completo e complexo para o controle da diabetes',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/vyttra_logo.png?alt=media&token=d1d12a0b-d054-4361-8422-02156c268152',
                    numImages: 3,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/vyttra1.png?alt=media&token=b45c287d-bb23-4988-a4e4-5a5a959274f5'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/vyttra2.png?alt=media&token=22069dd0-5f1e-41c6-85de-3f12102a9d08'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/vyttra3.png?alt=media&token=f965b820-21c5-4e16-883e-45d08b22c9de'}
                        ],
                    tags: [
                        {tag: 'react-native'},
                        {tag: 'Firebase Auth'},
                        {tag: 'MMKV'},
                        {tag: 'Context API'},
                        {tag: 'REST API'},
                        {tag: 'Android'},
                        {tag: 'iOS'},
                        {tag: 'wheel calendar'},
                        {tag: 'axios'},
                        {tag: 'RN Calendar'},
                        {tag: 'React-Native Paper'},
                        {tag: 'JSON'},
                        {tag: 'AppStore'}
                    ]
                },
                fourReal: {
                    title: '4real', 
                    subTitle: 'android / ios app',
                    backContent: 'Criação de logotipia e identidade visual, design do aplicativo e programação React Native',
                    backContent2: '',
                    description: '4Real é um app em desenvolvimento para o mercado norte-americano. Trata-se de um aplicativo para venda de infoprodutos relacionados a cupons promocionais de sorteio. Realizei todo o trabalho de criação da identidade visual, design UX e atualmente desenvolvo, juntamente à equipe local, todo o front-end.',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/4real_logo.png?alt=media&token=921e99c3-d83b-4880-9a5c-df511bba89c2',
                    numImages: 3,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/4real1.png?alt=media&token=d3ada04f-d870-4db2-a36e-acf036e0aac3'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/4real2.png?alt=media&token=74309c5c-425c-4f7e-9ed5-afb42331be34'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/4real3.png?alt=media&token=ddb4dd12-07bb-448c-b618-ee191d0597f8'}
                        ],
                    tags: [
                        {tag: 'react-native'},
                        {tag: 'Expo'},
                        {tag: 'MMKV'},
                        {tag: 'Context API'},
                        {tag: 'REST API'},
                        {tag: 'Android'},
                        {tag: 'iOS'},
                        {tag: 'axios'},
                        {tag: 'JSON'},
                        {tag: 'UX/UI'},
                        {tag: 'Adobe Photoshop'},
                        {tag: 'design'}
                    ]
                },
                tria: {
                    title: 'embraer okto', 
                    subTitle: 'android / zebra app',
                    backContent: 'Programação React Native para captura de assinatura digital e outras melhorias no app',
                    backContent2: '',
                    description: 'A OGMA é o braço logistico da Embraer em Portugal e seu sistema de rastreamento de cargas terrestres é o OKTO. Junto à Agência TRIA SOFTWARE, realizei melhorias no aplicativo, tais como recolhimento da assinatura do recebedor, criação de situação de não-conformidade na entrega, leitura de código de barras do ponto de entrega, entre outras.',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/ogma_logo.png?alt=media&token=a88d44d6-bdcb-48d5-aba4-1dd3ef775cff',
                    numImages: 4,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/ogma0.png?alt=media&token=4ea9d206-1e62-4492-98c5-4f079135bc05'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/ogma1.png?alt=media&token=4295f269-43d2-4e47-bf35-5e48190ab460'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/ogma2.png?alt=media&token=4f822d6c-71a7-4546-997f-cc366e90dc30'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/ogma3.png?alt=media&token=8e2dad2b-4ccb-4815-84e2-0a4944291eb2'}
                        ],
                    tags: [
                        {tag: 'react-native'},
                        {tag: 'barcode'},
                        {tag: 'REST API'},
                        {tag: 'Android'},
                        {tag: 'axios'},
                        {tag: 'baseˆ$ PNG'},
                        {tag: 'Zebra'},
                        {tag: 'JSON'}
                    ]
                },
                n4natural: {
                    title: 'N4 Natural', 
                    subTitle: 'magento ecommerce',
                    backContent: 'Loja desenvolvida em Magento. Aplicação de layout baseado em template, funcionalidades backend e frontend',
                    backContent2: '',
                    description: 'N4Natural é uma loja virtual Magento. Atendo a este cliente há mais de 2 anos. Trata-se de uma loja de suplementos e alimentos naturais na qual, além da relação profissional, eu acredito muito. Foi desenvolvida a nova identidade visual da empresa, aplicado o layout ao Front End do Magento, além do desenvolvimento de uma ferramenta de back-end para a gestão do conteúdo da Home do site.',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/n4natural_logo.png?alt=media&token=15eef04a-7950-4f8a-9264-b3fac6c5548f',
                    numImages: 3,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/n4natural1.png?alt=media&token=1e0be575-a367-474c-9549-1b0cc823d03f'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/n4natural2.png?alt=media&token=13387bcd-8dde-46be-8d58-f5c0c96cb117'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/n4natural3.png?alt=media&token=08949d58-e51a-484a-95d5-663ce87dd68b'}
                        ],
                    tags: [
                        {tag: 'jQuery'},
                        {tag: 'Magento'},
                        {tag: 'backend'},
                        {tag: 'PHP'},
                        {tag: 'design'},
                        {tag: 'UX/UI'},
                        {tag: 'frontend'},
                        {tag: 'Adobe Photoshop'}
                    ]
                },
                qtr: {
                    title: 'qtr?', 
                    subTitle: 'ios / android app',
                    backContent: 'Idealização, design e desenvolvimento React Native',
                    backContent2: '',
                    description: '"Quem Tem Remédio?" é um projeto particular, que faz parte de um movimento de gratidão que levarei até o fim comigo. Transplantados e pessoas com doenças graves são submetidos a medicamentos caríssimos e por períodos longos, quando não vitalícios. Estes medicamentos são distribuídos gratuitamente pelo Governo. Porém, a distribuição é falha, e com isso os próprios doentes acabam criando redes de auxílio na doação e intercâmbio destes remédios. Este app centraliza quem tem remédio e quem precisa de medicamento, fomentando essa troca.',
                    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/qtr_logo.png?alt=media&token=01ed3923-898e-4be0-b230-2be9e7f04aa1',
                    numImages: 3,
                    gallery: [
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/qtr1.png?alt=media&token=e74d0ece-35f2-4ce0-ac82-ecbafde650b6'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/qtr2.png?alt=media&token=b031cb90-144b-4013-9d19-c5cc531cb9c7'},
                            {img: 'https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-rodrigues.appspot.com/o/qtr3.png?alt=media&token=37b24848-c8b5-4ba7-ad09-262fa8d34303'}
                        ],
                    tags: [
                        {tag: 'react-native'},
                        {tag: 'firebase'},
                        {tag: 'design'},
                        {tag: 'UX/UI'},
                        {tag: 'Figma'},
                        {tag: 'Android'},
                        {tag: 'iOS'},
                        {tag: 'Projeto'},
                        {tag: 'REST API'},
                        {tag: 'Adobe Photoshop'}
                    ]
                }
            }
        )
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message});
        
    }
}

export default handler