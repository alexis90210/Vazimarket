<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/dashboard')]
class CreateursController extends AbstractController
{
    #[Route('/createurs', name: 'app_createurs')]
    public function index(): Response
    {
        return $this->render('createurs/index.html.twig', [
            'controller_name' => 'CreateursController',
        ]);
    }
}
