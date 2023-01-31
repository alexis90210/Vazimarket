<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class ListeProduitController extends AbstractController
{
    #[Route('/produits', name: 'app_liste_produit')]
    public function index(): Response
    {
        return $this->render('liste_produit/index.html.twig', [
            'controller_name' => 'ListeProduitController',
        ]);
    }
}
