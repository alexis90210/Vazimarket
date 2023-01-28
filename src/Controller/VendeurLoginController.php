<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VendeurLoginController extends AbstractController
{
    #[Route('/vendeur-login', name: 'app_vendeur_login')]
    public function index(): Response
    {
        return $this->render('vendeur_login/index.html.twig', [
            'controller_name' => 'VendeurLoginController',
        ]);
    }
}
