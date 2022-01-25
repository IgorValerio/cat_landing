<?php 

namespace App\Controllers;

class HomeController
{
  public function index($request, $response)
  {
      return $response->write('Hello, World!' . $request->getParam('name'));
  }
}