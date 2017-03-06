using System;

namespace AureliaDemo.Controllers {
  public class TimeController {
    public object Index()
    {
      return new {
        Time = DateTime.Now.ToString("T")
      };
    }
  }
}