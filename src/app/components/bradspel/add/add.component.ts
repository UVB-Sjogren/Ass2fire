import { Component} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/compat/storage";
import {AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Spel} from "../spel/spe-lista.component";
import { collection,addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { Firestore} from "@angular/fire/firestore";


@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styles: [`#centered{
    position: center;
    text-align: center;}`],
})
export class AddComponent {
  ref!: AngularFireStorageReference;
  task!: AngularFireUploadTask;
  bildid!: string;
  imgurl: any;
  firebaseConfig = {
    apiKey: "AIzaSyC9RBn9xPhEGCFAkAwztICLQLLKees9WOI",
    authDomain: "ik163-1b3aa.firebaseapp.com",
    databaseURL: "https://ik163-1b3aa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ik163-1b3aa",
    storageBucket: "ik163-1b3aa.appspot.com",
    messagingSenderId: "163157500265",
    appId: "1:163157500265:web:0767bd827d3b0b036d9df8",
    measurementId: "G-48KKM7T7V5"
  };

  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);

  uploadProgress$: any;

  onSubmit() {
  }

  addSpel = new Spel("", "", "", 2, 4, "", "");

// @ts-ignore
  kategorier = ['Roll and write', 'Kortspel', 'Worker placement', 'Krigsspel', 'Eurogame'];
  submitted = false;
sparSpel:Spel;
  constructor(private afStorage: AngularFireStorage, private readonly firestore: Firestore) {
  }

  clearValue() {
    this.addSpel = {
      namn: "",
      designer: "",
      utgivare: "",
      franspelare: 0,
      tillspelare: 0,
      imgurl: "",
      beskrivning: "",
    }
  }
valjBild(){
  this.bildid = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(this.bildid);
}
  sparaSpel() {
    this.sparSpel = new Spel(
      this.addSpel.namn,
      this.addSpel.designer,
      this.addSpel.utgivare,
      this.addSpel.franspelare,
      this.addSpel.tillspelare,
      this.addSpel.imgurl,
      this.addSpel.beskrivning)
    if(this.checkFields()){
      window.alert("sparad som addspel");
      this.uploadSpel()
    }
    else window.alert("passerade inte checken!");
  }

  uploadImage(event) {
    this.bildid = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(this.bildid);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress$ = this.task.percentageChanges();
    this.addSpel.imgurl = "https://storage.googleapis.com/ik163-1b3aa.appspot.com/" + this.bildid;
    this.imgurl = "https://storage.googleapis.com/ik163-1b3aa.appspot.com/" + this.bildid;
  }

  async uploadSpel() {
// Add a new document with a generated id.
    const docRef = await addDoc(collection(this.db, "Spel"), {
      namn: this.addSpel.namn,
      imgurl: this.addSpel.imgurl,
      designer: this.addSpel.designer,
      utgivare: this.addSpel.utgivare,
      franspelare: this.addSpel.franspelare,
      tillspelare: this.addSpel.tillspelare,
      beskrivning: this.addSpel.beskrivning
    });
    window.alert("Document written with ID: "+ docRef.id);
  }

 checkFields() {
  if(this.addSpel.franspelare== 0|| this.addSpel.tillspelare==  0) {
    window.alert(
  "lägsta antalet spelare är: från 1 till 1");
}
if (this.addSpel.franspelare > this.addSpel.tillspelare) {
  window.alert("kan inte vara ett högre värde för från än till för spelar antal");
  return false;
}
if (this.addSpel.namn.length < 2) {
  window.alert("Namnet är för kort");
  return false;
}
if (this.addSpel.designer.length < 2) {
  window.alert("Namnet på designern är för kort");
  return false;
}
if (this.addSpel.utgivare.length < 2) {
  window.alert("Namnet på utgivaren är för kort");
  return false;
}
if (this.addSpel.imgurl.length < 10) {
  window.alert("Ingen bild tillagd");
  return false;
}
if (this.addSpel.utgivare.length >= 2 && this.addSpel.franspelare <= this.addSpel.tillspelare && this.addSpel.namn.length >= 2 && this.addSpel.designer.length >= 2 && this.addSpel.imgurl.length >= 10) {
  window.alert("klart för upload!!!");
  return true;
}
return false;
}
  }
