<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StoreListController extends AbstractController
{
    #[Route('/store-list', name: 'app_store_list')]
    public function index(): Response
    {
        return $this->render('store_list/index.html.twig', [
            'controller_name' => 'StoreListController',
        ]);
    }
}
