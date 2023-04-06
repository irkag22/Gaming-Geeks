import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Select
  } from '@chakra-ui/react'

import { Field, Form, Formik } from 'formik';

export default function FormikGame() {
    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: 'Sasuke' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
            <Form>
            <FormControl>
                <FormLabel>Game</FormLabel>
                <Select placeholder='Select game'>
                <option>Among Us</option>
                <option>Goose Goose Duck</option>
                <option>PUBG: Battlegrounds</option>
                <option>Apex Legends</option>
                <option>Grand Theft Auto V</option>
                <option>Civilization VI</option>
                <option>Elden Ring</option>
                <option>Stardew Valley</option>
                <option>Rocket League</option>
                <option>Final Fantasy XIV</option>
                <option>Red Dead Redemption II</option>
                <option>The Elder Scrolls V: Skyrim</option>
                <option>Dead By Daylight</option>
                <option>Sims 4</option>
                <option>Other</option>
            </Select>
            </FormControl>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Chat:</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }