import React, {FunctionComponent} from 'react';
import Box from "@mui/material/Box";
import rbcLogoWhite from '@/public/rbc-logo-white.png'
import ericssonLogoWhite from '@/public/ericsson-logo-white.png'
import loansCanadaLogoWhite from '@/public/loans-canada-logo-white.png'
import fygoLogoWhite from '@/public/fygo-logo-white.png'
import esqcLogoWhite from '@/public/esqc-logo-white.png'
import {gql, useQuery} from "@apollo/client";
import MotionCard from "@/pages/components/MotionCard/MotionCard";
import {WorkExperience} from "@prisma/client";
import Image from "next/image";

const CompanyBar: FunctionComponent = () => {
    const query = gql`
    query Query {
        workExperiences {
            body
            header
            subHeader
            tags {
                name
            }
            companyName
        }
    }
    `

    const { loading, error, data } = useQuery(query);
    // if (data && experiences) {
    //     console.log(data);
    //     setExperiences(data)
    // }
    // if (loading) {
    //     return "Loading...";
    // }
    //
    // if (error) {
    //     return `Error: ${error.message}`;
    // }

    return (
        <Box className={`grid grid-cols-2 sm:grid-cols-none sm:flex w-full px-12 h-48`}>
            {data && data.workExperiences.map((workExperience: WorkExperience, index: number) => (
                <MotionCard key={index} {...workExperience} image={getLogo(workExperience.companyName, 'white')} />
            ))}
        </Box>
    );
};

export default CompanyBar;

function getLogo(companyName: string, color: string) {
    switch (companyName.toLowerCase()) {
        case 'rbc':
            return color == 'white' ? <Image src={rbcLogoWhite} alt="RBC Logo White" width={50} height={50} /> : null;
        case 'ericsson':
            return color == 'white' ? <Image src={ericssonLogoWhite} alt="Ericsson Logo White" width={60} height={60} /> : null;
        case 'loanscanada':
            return color == 'white' ? <Image src={loansCanadaLogoWhite} alt="Loans Canada Logo White" width={150} height={150} /> : null;
        case 'fygo':
            return color == 'white' ? <Image src={fygoLogoWhite} alt="Fygo Logo White" width={100} height={100} /> : null;
        case 'esqc':
            return color == 'white' ? <Image src={esqcLogoWhite} alt="ESQC Logo White" width={100} height={100} /> : null;
    }
}