<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class EtiquettesController extends AbstractController
{
    #[Route('/etiquettes', name: 'app_etiquettes')]
    public function index(): Response
    {
        return $this->render('etiquettes/index.html.twig', [
            'controller_name' => 'EtiquettesController',
        ]);
    }
}
