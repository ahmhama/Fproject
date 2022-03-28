import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import HeaderSection from './HeaderSection'
import CardUpcomingVaccines from './CardUpcomingVaccines'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingVaccinesSlice } from '../../../stores/upcomingVaccinesSlice'
import { getVaccineSlice } from '../../../stores/vaccineSlice'

const UpcomingVaccinesSection = ({ switchTo, navigation }) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.upcomingVaccines.upcomingVaccine)
    const vaccineData = useSelector(state => state.vaccine.vaccine)


    const accountChildren = useSelector(state => state.account.account)




    useEffect(() => {
        if (accountChildren) {
            dispatch(getUpcomingVaccinesSlice(accountChildren.children[0].childId))

        }
        dispatch(getVaccineSlice())
    }, [dispatch, accountChildren])



    return (
        <View style={styles.upcoming_vaccines}>
            <HeaderSection content="Vaccines" switchTo={switchTo} />
            {data ? data.childVaccines.map((item) => !item.status && !item.isMissed ? vaccineData.map((vaccine) => {
                if (item.vaccineId === vaccine.vaccineId) {
                    return (
                        <CardUpcomingVaccines

                            switchInfo={() => navigation.navigate("InformationVaccine", {
                                title: vaccine.vaccineName,
                                diseasesName: vaccine.diseasesName,
                                doseRoute: vaccine.doseRoute,
                                vaccineAge: vaccine.vaccineAge,
                            })}
                            childId={item.childId}
                            key={vaccine.vaccineId}
                            typeVaccine={vaccine.type}
                            titleVaccine={vaccine.vaccineName}
                            ageGroup={vaccine.vaccineAge}
                        />
                    )
                }
            })

                //  (
                //     <CardUpcomingVaccines

                //         switchInfo={() => navigation.navigate("Information", {
                //             title: item.vaccineName,
                //             image: "https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?k=20&m=1198271727&s=612x612&w=0&h=DmBeEdGk2bAUp6lt69brvegHGdH-Kd22oeCkESozyhg=",
                //             description: "cscscscscscscacsakcakcsmncjsacvaskcjbln;mknbjghvsanklc;sceugcewk,l;fefkhbfgueqbhmkl,;"
                //         })}
                //         childId={item.childId}
                //         key={item.vaccineId}
                //         typeVaccine={item.type}
                //         titleVaccine={item.vaccineName}
                //         ageGroup={item.vaccineAge}
                //     />
                // )
                : null) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    upcoming_vaccines: {
        flex: 1,
        paddingTop: 20,

    }
})

export default UpcomingVaccinesSection;