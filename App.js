import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form"; // Componentes que permiten la validacion de la información de TextInput

export default function App() {
  // Definir los datos del formulario
  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      salary:'',
      age:'',
      date:''
    }
  })

//Metodo para capturar la informacion - onSumbit
const onSumbit = data  => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÑñáéíóú ]+$/i,
          maxLength:30,
          minLength:5
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="Nombre Completo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="fullname" //Estado a validar
      />
      {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El campo nombre es obligatorio</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>El nombre solo debe de tener letras y espacios</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder de 30 caracteres</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre debe tener minimo 5 caracteres</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
          maxLength:200,
          minLength:7
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="Correo Electronico"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email" //Estado a validar
      />
      {errors.email?.type == "required" && <Text style={{color:'red'}}>El campo email es obligatorio</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:'red'}}>Ingresar correo electronico valido</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[0-9]*(\.?)[ 0-9]+$/,
          max:10000000,
          min:2000000
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="Digite el salario"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="salary" //Estado a validar
      />
      {errors.salary?.type == "required" && <Text style={{color:'red'}}>El salario es obligatorio</Text>}
      {errors.salary?.type == "pattern" && <Text style={{color:'red'}}>Este campo solo es numerico</Text>}
      {errors.salary?.type == "max" && <Text style={{color:'red'}}>El salario no puede exceder de 10000000</Text>}
      {errors.salary?.type == "min" && <Text style={{color:'red'}}>El salario no puede ser menor a 2000000</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[0-9]*(\.?)[ 0-9]+$/,
          max:35,
          min:18
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="Digite la edad"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="age" //Estado a validar
      />
      {errors.age?.type == "required" && <Text style={{color:'red'}}>El campo salario es obligatorio</Text>}
      {errors.age?.type == "pattern" && <Text style={{color:'red'}}>Este campo solo es numerico</Text>}
      {errors.age?.type == "max" && <Text style={{color:'red'}}>La edad no puede ser mayor a 35</Text>}
      {errors.age?.type == "min" && <Text style={{color:'red'}}>La edad no puede ser menor</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
          maxLength:35,
          minLength:18
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="contraseña"
            secureTextEntry={true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password" //Estado a validar
      />
      {errors.password?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatorio</Text>}
      {errors.password?.type == "pattern" && <Text style={{color:'red'}}>Entre 8 y 15 caracteres, al menos un caracter especial, Un numero y una letra en mayuscula</Text>}
      
      <Controller
        control={control}
        rules={{
          pattern:/^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
          maxLength:35,
          minLength:18
        }}
        render={({field: {onChange, onBlur, value}})=>(
          <TextInput
            style={styles.inputs}
            placeholder="aa/mm/dd"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="date" //Estado a validar
      />
      {errors.date?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatorio</Text>}
      {errors.date?.type == "pattern" && <Text style={{color:'red'}}>Entre 8 y 15 caracteres, al menos un caracter especial, Un numero y una letra en mayuscula</Text>}
      

      <TouchableOpacity
        style={{backgroundColor:'red',padding:10,marginTop:20,borderRadius:10}}
        onPress={handleSubmit(onSumbit)}
        >
          <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    padding:10,
    borderWidth:1,
    borderColor:'black',
    textAlign:'center',
    borderRadius:10,
    color:'black',
    marginBottom:5
  }
});
