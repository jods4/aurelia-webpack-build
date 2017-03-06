using Microsoft.AspNetCore.Mvc;

namespace AureliaDemo.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index() => View();
  }
}