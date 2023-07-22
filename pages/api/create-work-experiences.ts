import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    const client = await db.connect();

    // try {
    //     await client.sql`CREATE TABLE work_experience ( Header varchar(255), SubHeader varchar(255), Body Text );`;
    //     const loansCanada = ['Web Developer | 10/2021 - 05/2022', 'Loans Canada | Montréal, Canada', '• Developed OAuth middleware and incorporated localization techniques to build a secure portal for customers to obtain free credit scores.\n    • The portal\'s launch was met with resounding success, contributing to an |8.1% increase in website traffic within just 3 weeks.|\n    • Utilized a comprehensive range of technologies, including PHP, HTML, SASS, JavaScript, Vue.js, Inertia.js, Laravel, MySQL, and WordPress.\n'];
    //     await client.sql`INSERT INTO work_experience (Header, SubHeader, Body) VALUES (${loansCanada[0]}, ${loansCanada[1]}, ${loansCanada[2]});`;
    // } catch (error) {
    //     return response.status(500).json({ error });
    // }

    const res = await client.sql`SELECT * FROM work_experience;`;
    return response.status(200).json({ res });
}