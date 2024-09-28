import * as Yup from 'yup'

function nameValidations(fieldName) {
  return Yup.string()
    .min(2, `At least 2 characters for ${fieldName} !`)
    .max(20, `Too many characters for ${fieldName} !`)
    .matches(
      /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/,
      `Please enter ${fieldName} with only letters allowed !`
    )
    .required(`Required ${fieldName} !`)
}

// Can authorize two format [ex: 1 or 01]
function dateValidation(fieldName) {
  return Yup.date()
    .min(new Date(1900, 1, 1), `Please enter a ${fieldName} after 1900 !`)
    .max(new Date(2099, 12, 31), `Please enter a ${fieldName} before 2099 !`)
    .required(`Required ${fieldName} !`)
}

export function employeeSchema() {
  return Yup.object({
    firstName: nameValidations('first name'),
    lastName: nameValidations('last name'),
    dateOfBirth: dateValidation('date of birth'),
    startDate: dateValidation('start date'),
    street: Yup.string()
      .min(2, 'At least 2 characters !')
      .max(30, 'Too many characters !')
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 -]+$/,
        'Please enter street name with only letters, numbers, spaces and dashes are allowed !'
      )
      .required('Required street name !'),
    city: Yup.string()
      .min(2, 'At least 2 characters !')
      .max(30, 'Too many characters !')
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ -]+$/,
        'Please enter city name with only letters, spaces and dashes are allowed !'
      )
      .required('Required city name !'),
    state: Yup.string().required('Required state name !'),

    // American zip code can exclude this format: xxxxx-xxxx
    zipCode: Yup.string()
      .min(5, 'At least 2 characters !')
      .max(10, 'Too many characters !')
      .matches(
        /^[0-9]{5}(?:-[0-9]{4})?$/,
        'Please enter a zip code with only number like this format: ‘xxxxx‘ or ‘xxxxx-xxxx‘ !'
      )
      .required('Required zip code !'),
    department: Yup.string().required('Required department name !')
  })
}
