import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const loansCanada = ['Web Developer | 10/2021 - 05/2022', 'Loans Canada | Montréal, Canada', '• Developed OAuth middleware and incorporated localization techniques to build a secure portal for customers to obtain free credit scores.\n    • The portal\'s launch was met with resounding success, contributing to an |8.1% increase in website traffic within just 3 weeks.|\n    • Utilized a comprehensive range of technologies, including PHP, HTML, SASS, JavaScript, Vue.js, Inertia.js, Laravel, MySQL, and WordPress.\n'];

async function main() {
    const result = await prisma.workExperience.create({
            data:
                {
                    header: loansCanada[0],
                    subHeader: loansCanada[1],
                    body: loansCanada[2],
                    tags: {
                        create: [
                            {name: "SASS"},
                            {name: "PHP"}
                        ]
                    }
                },
            include: {
                tags: true
            }
        }
    )
    console.log(result);
}

main().catch((e) => {
    console.log(e)
}).finally(() => prisma.$disconnect())