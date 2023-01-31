<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class AttributsController extends AbstractController
{
    #[Route('/attributs', name: 'app_attributs')]
    public function index(): Response
    {
        return $this->render('attributs/index.html.twig', [
            'controller_name' => 'AttributsController',
        ]);
    }
}
