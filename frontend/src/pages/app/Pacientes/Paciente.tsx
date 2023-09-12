import { Box, Stack, Typography } from "@mui/joy";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Patient } from "../../../../../backend/common/patients";
import {
    Bloodtype,
    Female,
    Male,
    Numbers,
    People,
    Person,
    VolunteerActivism,
} from "@mui/icons-material";
import Barloader from "react-spinners/BarLoader";

const override: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const URL = "http://localhost:3000/patients?cpf=";

export default function Paciente() {
    const [patientData, setPatientData] = React.useState<Patient | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);
    const { pacientCPF } = useParams();

    useEffect(() => {
        const loader = async () => {
            if (pacientCPF == undefined) return;

            await fetch(URL + pacientCPF, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(async (res) => {
                    if (res.status === 500) {
                        toast.error("Algo deu errado :/", {
                            position: "bottom-center",
                            theme: "light",
                        });

                        return;
                    }

                    await res
                        .json()
                        .then((response) => {
                            setPatientData(response as Patient);
                            setLoading(false);
                        })
                        .catch(() => {
                            toast.error("Algo deu errado :/", {
                                position: "bottom-center",
                                theme: "light",
                            });
                        });
                })
                .catch(() => {
                    toast.error("Algo deu errado :/", {
                        position: "bottom-center",
                        theme: "light",
                    });
                });
        };

        loader();
    }, []);

    return (
        <Box
            sx={{
                paddingX: "4rem",
                paddingY: "2rem",
                width: "100vw",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}>
                <Box
                    sx={{
                        width: "100%",
                        maxHeight: "max-content",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "#d1d5db",
                        boxShadow:
                            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        paddingX: "4rem",
                        paddingY: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                    {loading == true || patientData == undefined ? (
                        <Barloader
                            color="#0B6BCB"
                            loading={loading}
                            cssOverride={override}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        <>
                            <Typography startDecorator={<Person />} level="title-lg">
                                Paciente {patientData.name}
                            </Typography>
                            <Typography
                                startDecorator={
                                    patientData.gender === "Masculino" ? <Male /> : <Female />
                                }>
                                Sexo: {patientData.gender}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                CPF: {patientData.cpf}
                            </Typography>
                            <Stack direction="row">
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    RG: {patientData.rg}
                                </Typography>
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    Orgão: {patientData.rg}
                                </Typography>
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    UF: {patientData.rg}
                                </Typography>
                            </Stack>
                            <Stack direction="row">
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    Endereço: {patientData.rg}
                                </Typography>
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    Bairro: {patientData.rg}
                                </Typography>
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    UF: {patientData.rg}
                                </Typography>
                                <Typography startDecorator={<Numbers />} level="body-md">
                                    CEP: {patientData.rg}
                                </Typography>
                            </Stack>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Testemunha: {patientData.rg}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Parentesco Biologico Pai: {patientData.rg}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Parentesco Pai: {patientData.rg}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Irmão Gemêo: {patientData.rg}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Transplante de Medula: {patientData.rg}
                            </Typography>
                            <Typography startDecorator={<Numbers />} level="body-md">
                                Transfusão de Sangue: {patientData.rg}
                            </Typography>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
